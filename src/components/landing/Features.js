import React from 'react'

const Features = () => {
    return (
        <>
            {/* ====== Features Start ====== */}
            <section id="features" className="ud-features">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="ud-section-title">
                                <span>Features</span>
                                <h2>Main Features</h2>
                                <p>
                                    Our GitHub Profile builder lets you make a stunning-looking GitHub Profile in minutes. Showcase your project, stats, and experience attractively.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xl-3 col-lg-3 col-sm-6">
                            <div
                                className="ud-single-feature wow fadeInUp"
                                data-wow-delay=".1s"
                            >
                                <div className="ud-feature-icon">
                                <i class="fa-solid fa-handshake"></i>
                                </div>
                                <div className="ud-feature-content">
                                    <h3 className="ud-feature-title"> Professional Impression</h3>
                                    <p className="ud-feature-desc">
                                        Boost your credibility with a visually appealing profile showcasing skills and projects.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-3 col-sm-6">
                            <div
                                className="ud-single-feature wow fadeInUp"
                                data-wow-delay=".15s"
                            >
                                <div className="ud-feature-icon">
                                <i class="fa-solid fa-chart-simple"></i>
                                </div>
                                <div className="ud-feature-content">
                                    <h3 className="ud-feature-title">Engage Visitors</h3>
                                    <p className="ud-feature-desc">
                                        Encourage interaction by adding call-to-action buttons and links to social profiles.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-3 col-sm-6">
                            <div
                                className="ud-single-feature wow fadeInUp"
                                data-wow-delay=".2s"
                            >
                                <div className="ud-feature-icon">
                                <i class="fa-solid fa-person-burst"></i>
                                </div>
                                <div className="ud-feature-content">
                                    <h3 className="ud-feature-title">Personal Branding</h3>
                                    <p className="ud-feature-desc">
                                        Build a unique identity, making it easier for others to recognize and remember you.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-3 col-sm-6">
                            <div
                                className="ud-single-feature wow fadeInUp"
                                data-wow-delay=".25s"
                            >
                                <div className="ud-feature-icon">
                                <i class="fa-solid fa-list"></i>
                                </div>
                                <div className="ud-feature-content">
                                    <h3 className="ud-feature-title">Skill Demonstration</h3>
                                    <p className="ud-feature-desc">
                                        Clearly display your technical skills and expertise through badges and visuals.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* ====== Features End ====== */}
        </>
    )
}

export default Features
