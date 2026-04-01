import React, { useEffect } from 'react';
import { Database, TrendingUp, Layers, CheckCircle } from 'lucide-react';

const Methodology = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div style={{ backgroundColor: '#f9fafb', minHeight: '100vh', paddingBottom: '6rem' }}>
            <div style={{ backgroundColor: '#111827', padding: '7rem 1rem 5rem 1rem', textAlign: 'center', color: 'white' }}>
                <div style={{ maxWidth: '800px', margin: '0 auto' }}>
                    <h1 style={{ fontSize: '3rem', fontWeight: 800, marginBottom: '1rem' }}>Dataset & Methodology</h1>
                    <p style={{ fontSize: '1.25rem', color: '#9ca3af', lineHeight: 1.6 }}>
                        An open exploration of our data pipeline, encompassing sourcing, preprocessing heuristics, feature engineering, and ensemble model training.
                    </p>
                </div>
            </div>

            <div className="container" style={{ marginTop: '4rem', display: 'flex', flexDirection: 'column', gap: '3rem' }}>

                {[
                    {
                        icon: Database,
                        title: "1. Data Sourcing (FEMA Kaggle Dataset)",
                        desc: "Our primary historical pipeline integrates the authoritative FEMA Natural Disaster Declarations dataset natively sourced via Kaggle. This encapsulates 50+ years of localized US incident markers across highly variable climactic regions, providing millions of unrefined tabular rows detailing the initial structural and casualty impacts."
                    },
                    {
                        icon: Layers,
                        title: "2. Data Preprocessing Steps",
                        desc: "Raw datasets inherently contain anomalies. Our pre-processing engine executes automated missing-value imputation via KNN algorithms. Temporal indices are normalized into standardized UNIX timestamps. We implement aggressive outlier culling for anomalies outside the 99th percentile, ensuring mathematical purity before subsequent pipeline phases."
                    },
                    {
                        icon: TrendingUp,
                        title: "3. Feature Engineering",
                        desc: "To empower predictive accuracy, we extract derived features simulating environmental complexity. Geotagged risk zones are appended alongside socio-economic damage multipliers. We synthesize lag-features calculating localized frequency history (e.g., 'disasters_past_5_years') and combine variables to create our proprietary Unified Severity Index."
                    },
                    {
                        icon: CheckCircle,
                        title: "4. Model Training & Ensemble Implementation",
                        desc: "We exclusively deploy Random Forest and Gradient Boosting (XGBoost) ensemble architectures to prevent systemic variance and overfitting. Datasets undergo rigorous 80/20 temporal train-test splits. Hyperparameters are refined via dynamic GridSearch, finalizing optimal trees and minimizing absolute error, generating a highly reliable predictive intelligence oracle."
                    }
                ].map((item, i) => (
                    <div key={i} style={{ backgroundColor: '#ffffff', padding: '3rem', borderRadius: '16px', border: '1px solid #eaeaea', boxShadow: '0 4px 10px rgba(0,0,0,0.03)', display: 'flex', gap: '2rem', alignItems: 'flex-start' }}>
                        <div style={{ width: '64px', height: '64px', backgroundColor: '#e0e7ff', color: '#0f62fe', borderRadius: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                            <item.icon size={32} />
                        </div>
                        <div>
                            <h2 style={{ fontSize: '1.5rem', fontWeight: 700, color: '#111827', marginBottom: '1rem' }}>{item.title}</h2>
                            <p style={{ color: '#4b5563', fontSize: '1.1rem', lineHeight: 1.7, margin: 0 }}>{item.desc}</p>
                        </div>
                    </div>
                ))}

            </div>
        </div>
    );
};

export default Methodology;
