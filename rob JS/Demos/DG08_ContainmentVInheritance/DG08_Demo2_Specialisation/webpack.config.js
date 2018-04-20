module.exports = {
    // Identify the entry file and the polyfiller
    entry: ['babel-polyfill', './main.js'],
    // Idenitfy the file that is created when we run
    // When webpack has done its stuff what and where?
    output: {
        path: __dirname,
        filename: 'index.js'
    },
    // Make sure that webpack looks for both js and jsx files
    resolve: {
        extensions: ['.js', '.jsx']
    },
    // Set up the webpack dev server
    devServer: {
        inline: true,       // Auto-refresh our page on the fly
        port: 8080          // Set the port on the server to run the app on
    },
    // Debugging support - enable the production of sourcemaps for easier debugging
    devtool: 'source-map',
    // Set up webpack to load and convert the files to JS
    //mode: 'development',
    module: {
        rules: [
            {
                // Find all files that end with .js or .jsx and pass to the loader
                test: /\.jsx?$/,
                // But don't look at the files in node_modules
                exclude: /node_modules/,
                // Use the babel-loader to load the files
                use: {
                    loader: 'babel-loader',
                    // Set the options to use the presets env and react
                    options: {
                        presets: ['env', 'react']
                    }
                }
            }
        ]
    }
}