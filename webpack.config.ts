import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import type {Configuration} from 'webpack';
import type {Configuration as DevServerConfiguration} from 'webpack-dev-server';

const config: Configuration = {
    entry: './src/index.tsx',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
        clean: true,
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.jsx'],
        alias: {
            '@': path.resolve(__dirname, 'src'),
            "@components": path.resolve(__dirname, "src/components"),
            "@composite": path.resolve(__dirname, "src/composite"),
            "@containers": path.resolve(__dirname, "src/containers"),
            "@constants": path.resolve(__dirname, "src/constants"),
            "@types": path.resolve(__dirname, "src/types"),
        },
    },
    module: {
        rules: [
            {
                test: /\.[jt]sx?$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            '@babel/preset-env',
                            '@babel/preset-react',
                            '@babel/preset-typescript',
                        ],
                        plugins: [
                            '@babel/plugin-transform-runtime'
                        ],
                    },
                },
            },
            {
                test: /\.s?css$/i,
                use: [
                    'style-loader',  // Вставляет CSS в DOM
                    'css-loader',    // Преобразует CSS в CommonJS
                    'sass-loader',   // Компилирует SCSS → CSS
                ],
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html',
        }),
    ],
    devServer: {
        static: path.resolve(__dirname, 'dist'),
        port: 3000,
        hot: true,
        compress: true,
    } as DevServerConfiguration,
    devtool: "eval-cheap-module-source-map",
    mode: 'development',
    cache: {
        type: "filesystem",
    },
    watchOptions: {
        ignored: /node_modules/,
    }
};

export default config;