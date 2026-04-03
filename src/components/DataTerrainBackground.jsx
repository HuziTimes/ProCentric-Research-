import { useEffect, useRef } from 'react';

const DataTerrainBackground = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        let animationFrameId;

        // Configuration
        const config = {
            gridSize: 30, // Number of points in each dimension (X and Z)
            spacing: 50, // Spacing between grid points
            speed: 0.005, // Speed of the terrain flow
            waveHeight: 80, // Maximum height of the waves
            cameraY: 300, // Camera height
            cameraZ: 400, // Camera distance back
            fov: 350, // Field of view effect (projection scaling)
            linkColor: 'rgba(56, 189, 248, ', // Base color of the grid lines (Tailwind sky-400)
            glowColor: 'rgba(59, 130, 246, ', // Node glow color (Tailwind blue-500)
            bgColor: '#020617' // Deep dark blue/black background
        };

        // Resize handler & Retina support
        const resize = () => {
            const dpr = window.devicePixelRatio || 1;
            canvas.width = window.innerWidth * dpr;
            canvas.height = window.innerHeight * dpr;
            ctx.scale(dpr, dpr);
        };
        window.addEventListener('resize', resize);
        resize();

        // 3D Point structure
        class Point3D {
            constructor(x, y, z) {
                this.x = x;
                this.y = y; // Will be calculated by wave function
                this.z = z;
                // Node flash properties
                this.isNode = Math.random() > 0.98; // 2% chance to be a glowing abstract data node
                this.nodeIntensity = Math.random();
                this.nodeDirection = Math.random() > 0.5 ? 1 : -1;
            }
        }

        // Initialize Grid
        const grid = [];
        const width = config.gridSize * config.spacing;
        const depth = config.gridSize * config.spacing;
        
        // Center the grid around 0,0
        const startX = -width / 2;
        const startZ = 0; // Starts from 0 and goes deep
        
        for (let i = 0; i < config.gridSize; i++) {
            const row = [];
            for (let j = 0; j < config.gridSize; j++) {
                row.push(new Point3D(startX + j * config.spacing, 0, startZ + i * config.spacing));
            }
            grid.push(row);
        }

        // Project 3D coordinate to 2D screen coordinate
        const project = (p) => {
            // Translate origin to camera context
            const camZ = p.z - config.cameraZ;
            // Prevent division by zero or rendering behind camera
            if (camZ <= 0) return null; 

            const scale = config.fov / camZ;
            
            // X and Y center of screen offsets (using innerWidth to account for DPR scaling)
            const x2d = (p.x * scale) + (window.innerWidth / 2);
            const y2d = ((p.y + config.cameraY) * scale) + (window.innerHeight / 2);
            
            return { x: x2d, y: y2d, scale: scale };
        };

        let time = 0;

        const render = () => {
            time += config.speed;
            ctx.fillStyle = config.bgColor;
            // Using absolute large rect to ensure coverage even on resize bounds
            ctx.fillRect(0, 0, window.innerWidth * 2, window.innerHeight * 2);

            // Calculate heights using sine waves to simulate terrain/data streams
            for (let i = 0; i < config.gridSize; i++) {
                for (let j = 0; j < config.gridSize; j++) {
                    const p = grid[i][j];
                    // Complex noise function using multiple sines
                    const wave1 = Math.sin((p.x * 0.01) + time) * config.waveHeight;
                    const wave2 = Math.cos((p.z * 0.015) - time * 1.5) * (config.waveHeight * 0.5);
                    const wave3 = Math.sin(((p.x + p.z) * 0.008) + time * 0.8) * (config.waveHeight * 0.3);
                    p.y = wave1 + wave2 + wave3;
                    
                    // Update glowing nodes
                    if (p.isNode) {
                        p.nodeIntensity += 0.02 * p.nodeDirection;
                        if (p.nodeIntensity > 1) { p.nodeIntensity = 1; p.nodeDirection = -1; }
                        if (p.nodeIntensity < 0) { p.nodeIntensity = 0; p.nodeDirection = 1; }
                    }
                }
            }

            // Draw connecting lines
            ctx.lineWidth = 1;
            
            for (let i = 0; i < config.gridSize - 1; i++) {
                for (let j = 0; j < config.gridSize - 1; j++) {
                    const p = grid[i][j];
                    const nextX = grid[i][j + 1];
                    const nextZ = grid[i + 1][j];

                    const projCurrent = project(p);
                    const projX = project(nextX);
                    const projZ = project(nextZ);

                    if (!projCurrent) continue;

                    // Fade out lines deeper in the Z-axis
                    const depthAlpha = Math.max(0, 1 - (p.z / depth));
                    
                    // Skip drawing if it's practically invisible
                    if (depthAlpha < 0.02) continue;

                    ctx.strokeStyle = `${config.linkColor}${depthAlpha * 0.6})`;
                    
                    ctx.beginPath();
                    // Draw horizontal line
                    if (projX) {
                        ctx.moveTo(projCurrent.x, projCurrent.y);
                        ctx.lineTo(projX.x, projX.y);
                    }
                    // Draw vertical/depth line
                    if (projZ) {
                        ctx.moveTo(projCurrent.x, projCurrent.y);
                        ctx.lineTo(projZ.x, projZ.y);
                    }
                    ctx.stroke();

                    // Draw Glowing Nodes (Risk Signals)
                    if (p.isNode && depthAlpha > 0.1) {
                        const radius = Math.max(0.5, 3 * projCurrent.scale * p.nodeIntensity);
                        
                        // Core glow
                        ctx.beginPath();
                        ctx.arc(projCurrent.x, projCurrent.y, radius, 0, Math.PI * 2);
                        ctx.fillStyle = `rgba(255, 255, 255, ${depthAlpha * p.nodeIntensity})`;
                        ctx.fill();

                        // Outer halo glow
                        ctx.beginPath();
                        ctx.arc(projCurrent.x, projCurrent.y, radius * 3, 0, Math.PI * 2);
                        ctx.fillStyle = `${config.glowColor}${depthAlpha * p.nodeIntensity * 0.5})`;
                        ctx.fill();
                    }
                }
            }

            animationFrameId = requestAnimationFrame(render);
        };

        render();

        return () => {
            window.removeEventListener('resize', resize);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <canvas 
            ref={canvasRef} 
            style={{ 
                position: 'absolute', 
                top: 0, 
                left: 0, 
                width: '100%', 
                height: '100%',
                pointerEvents: 'none',
                zIndex: 0,
                opacity: 0.85
            }} 
        />
    );
};

export default DataTerrainBackground;
