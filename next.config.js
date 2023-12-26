/** @type {import('next').NextConfig} */

module.exports = {
    output: "export",
    webpack(config, options) {
        config.module.rules.push({
            test : /\.svg$/,
            use  : ["@svgr/webpack"]
        });

        return config;
    }
}
