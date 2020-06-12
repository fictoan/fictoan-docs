import React from "react";
import { Row, Text,  Portion } from "reactised-fictoan";

class Colour extends React.PureComponent {
    componentDidMount() {
        document.title = "Colour — FICTOAN";

        window.scrollTo(0, 0);
    }

    render() {
        return (
            <section id="page-colour">
                <Row sidePadding="large" className="margin-top-small margin-bottom-small">
                    <Portion>
                        <h2 className="text-hue">Colour</h2>
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
                        <Text>
                            The below heading sizes are derived using a quick calculation using the{" "}
                            <code>$baseFontSize</code> and <code>$scaleFactor</code>, as set in the{" "}
                            <code>_ff-theme.scss</code> file.
                        </Text>
                        <Text>
                            <code>$baseFontSize</code> is set at 1em, and <code>$scaleFactor</code> to 1.24. This is a
                            variation of minor-third scale, change this to affect the heading sizes proportionally.
                        </Text>
                    </Portion>

                    <Portion>
                    </Portion>
                </Row>
            </section>
        );
    }
}

export default Colour;
