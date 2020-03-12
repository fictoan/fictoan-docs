import React, { ReactElement } from "react";

export const InlineSVG = ({ data, className, ...props }: { data: string; className?: string }): ReactElement => {
    return (
        <div
            // eslint-disable-next-line react/no-danger
            dangerouslySetInnerHTML={{
                __html: data
            }}
            className={`no-line-height ${className}`}
            {...props}
        />
    );
};

InlineSVG.defaultProps = {
    className: ""
};
