export const publicationsData = [
    {
        id: 'ml-loss-prediction',
        year: '2024',
        title: 'Machine Learning Architectures for Catastrophic Loss Prediction',
        journal: 'Global Risk Review',
        authors: 'Dr. Sarah Jenkins, Dr. Alan Turing, et al.',
        shortDesc: 'A comprehensive study on deploying gradient-boosted trees and neural networks for predicting insurance losses following natural catastrophes.',
        fullDesc: 'This completed research, published in early 2024, introduces a novel framework combining multi-modal data streams for real-time catastrophic risk assessment. The team successfully built a system that aggregates disparate satellite, meteorological, and historical loss datasets. The findings demonstrate a 25% increase in predictive accuracy for tropical cyclone damages compared to traditional actuarial methods.',
        findings: [
            'Demonstrated superior performance of transformer architectures in learning spatial and temporal patterns of weather anomalies.',
            'Established a standardized data pipeline to clean and integrate unstructured damage reports with structural building data.',
            'Proposed an ethical framework to ensure unbiased loss estimation across different socioeconomic jurisdictions.'
        ],
        methodology: 'The research employed supervised learning models trained on 15 years of structured and unstructured insurance claims data, combined with high-resolution satellite imagery.',
        doi: '10.1016/j.grr.2024.103.001',
        keywords: ['Machine Learning', 'Catastrophe Modeling', 'Actuarial Science', 'Climate Risk']
    },
    {
        id: 'ethical-frameworks-ai-emergency',
        year: '2023',
        title: 'Ethical Frameworks for AI in Emergency Services',
        journal: 'Computing for Society',
        authors: 'Elena Rodriguez, MSc, Dr. Margaret Hamilton',
        shortDesc: 'Establishing a rigorous set of philosophical and practical guidelines for algorithms deployed in life-or-death municipal scenarios.',
        fullDesc: 'As artificial intelligence is increasingly adopted to route ambulances and direct fire services, ensuring these systems act equitably is paramount. This paper presents a foundational framework to prevent algorithmic bias in emergency dispatch. The study investigated historical dispatch data in five major metropolitan areas, identifying intrinsic human biases that legacy AI systems were amplifying, and proposed mathematical constraints to mitigate them.',
        findings: [
            'Identified statistically significant discrepancies in legacy response time predictions based on neighborhood demographics.',
            'Formulated the "Equitable Routing Constraint" (ERC)—a mathematical loss function penalty that penalizes disparate service times.',
            'Created an open-source evaluation toolkit for municipalities to audit their existing dispatch algorithms.'
        ],
        methodology: 'Empirical analysis of dispatch logs utilizing causal inference models alongside qualitative interviews with city planners and emergency personnel.',
        doi: '10.1145/cfs.2023.081.004',
        keywords: ['AI Ethics', 'Algorithmic Fairness', 'Emergency Response', 'Urban Planning']
    },
    {
        id: 'data-synthesis-disaster-env',
        year: '2023',
        title: 'Data Synthesis in Multi-Hazard Disaster Environments',
        journal: 'International Safety Journal',
        authors: 'Dr. Alan Turing, Division Staff',
        shortDesc: 'Techniques for generating high-fidelity synthetic data to train AI models in environments where real-world disaster data is scarce or privacy-restricted.',
        fullDesc: 'Training robust AI models for disaster response relies on comprehensive datasets, which are often difficult to obtain during novel or overlapping catastrophic events (e.g., a hurricane followed by a chemical spill). This research established a breakthrough methodology utilizing Generative Adversarial Networks (GANs) and physics-based simulators to create synthetic, highly realistic, labeled datasets that mirror complex disaster scenarios.',
        findings: [
            'Developed a novel GAN variant capable of fusing localized geographical data with simulated post-disaster structural damage.',
            'Demonstrated that models trained on 40% real and 60% synthetic data achieved comparable accuracy to those trained on purely real datasets.',
            'Produced an open-access repository of synthetic disaster environments for global research collaboration.'
        ],
        methodology: 'Comparative analysis using generative deep learning pipelines validated against a holdout set of highly restricted, real-world multi-hazard event data.',
        doi: '10.1038/isj.2023.012.022',
        keywords: ['Synthetic Data', 'Generative Models', 'Disaster Management', 'Data Scarcity']
    }
];
