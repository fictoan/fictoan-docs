import React from 'react'
import {Portion, Row} from "reactised-fictoan";

class Typography extends React.PureComponent {
    componentDidMount() {
        document.title = "Typography — FICTOAN";

        window.scrollTo(0, 0);
    }

    render() {
        return (
            <section id="blog">
                <Row sidePadding="large" className="margin-top-small margin-bottom-small">
                    <Portion>
                        <h2 className="text-hue">Typography</h2>
                    </Portion>
                </Row>

                {/*  RF  //////////////////////////////////////////////////////////////////////////////////////////  */}
                {/*   SETTING IT UP  */}
                {/*  RF  //////////////////////////////////////////////////////////////////////////////////////////  */}
                <Row sidePadding="large" className="margin-top-medium">
                    <Portion>
                        <h4>Basics</h4>
                    </Portion>
                </Row>

                <Row sidePadding="large">
                    <Portion>
                        <p>The below heading sizes are derived using a quick calculation using the <code>$baseFontSize</code> and <code>$scaleFactor</code>, as set in the <code>_ff-theme.scss</code> file.</p>
                        <p><code>$baseFontSize</code> is set at 1em, and <code>$scaleFactor</code> to 1.24. This is a variation of minor-third scale, change this to affect the heading sizes proportionally.</p>
                    </Portion>

                    <Portion>
                        <div className="vertically-center-items">
                            <code className="margin-right-fixed-3x">h1</code>
                            <h1>Heading 1</h1>
                        </div>

                        <div className="vertically-center-items">
                            <code className="margin-right-fixed-3x">h2</code>
                            <h2>Heading 2</h2>
                        </div>

                        <div className="vertically-center-items">
                            <code className="margin-right-fixed-3x">h3</code>
                            <h3>Heading 3</h3>
                        </div>

                        <div className="vertically-center-items">
                            <code className="margin-right-fixed-3x">h4</code>
                            <h4>Heading 4</h4>
                        </div>

                        <div className="vertically-center-items">
                            <code className="margin-right-fixed-3x">h5</code>
                            <h5>Heading 5</h5>
                        </div>

                        <div className="vertically-center-items">
                            <code className="margin-right-fixed-3x">h6</code>
                            <h6>Heading 6</h6>
                        </div>

                        <div className="vertically-center-items">
                            <code className="margin-right-fixed-3x">p</code>
                            <p>paragraph</p>
                        </div>

                        <div className="vertically-center-items">
                            <code className="margin-right-fixed-3x">a</code>
                            <a>Link</a>
                        </div>
                    </Portion>
                </Row>
            </section>
        )
    }
}

export default Typography
