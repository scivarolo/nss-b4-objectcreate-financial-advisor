module.exports = {
    options: {
        transform: [
            [
                "babelify",
                {
                    "presets": [
                        [
                            "@babel/preset-env", {
                                "targets": {
                                    "node": "current"
                                }
                            }
                        ]
                    ]
                }
            ]
        ],
        browserifyOptions: {
            debug: true
        }
    },
    bundleproject: {
        src: ["../scripts/main.js"],
        dest: "../../public/bundle.js"
    }
}
