import Config, { environment } from 'webpack-config';

environment.setAll({
    env: () => (process.env.NODE_ENV === 'production' ? 'prod' : 'dev'),
});

const mergedConfig = new Config().extend('config/webpack/webpack.[env].js');
// console.log(mergedConfig)
export default mergedConfig;
