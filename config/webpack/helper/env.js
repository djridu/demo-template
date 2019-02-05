import chalk from 'chalk';

const isDebug = () => process.env.NODE_ENV !== 'production';
const isStage = () => !!process.argv.includes('--stage');
const isVerbose = () => !!process.argv.includes('--verbose');
const isAnalyze = () => !!process.argv.includes('--analyze');
const isExperimental = () => !!process.argv.includes('--experimental');
const isEsLintOn = () => !!process.argv.includes('--lint');

const getMode = () => (isDebug() ? 'development' : 'production');
const getModeNaming = () => (isStage() ? 'staging' : getMode());

const showState = () => {
    console.info(
        chalk.cyan(
            `NODE_ENV: ${chalk.yellow(
                chalk.bold(process.env.NODE_ENV ? process.env.NODE_ENV : 'development'),
            )}`,
        ),
    );
    console.info(chalk.cyan(`isDebug: ${chalk.yellow(chalk.bold(isDebug()))}`));
    console.info(chalk.cyan(`isStage: ${chalk.yellow(chalk.bold(isStage()))}`));
    console.info(chalk.cyan(`isVerbose: ${chalk.yellow(chalk.bold(isVerbose()))}`));
    console.info(chalk.cyan(`isAnalyze: ${chalk.yellow(chalk.bold(isAnalyze()))}`));
    console.info(chalk.cyan(`isExperimental: ${chalk.yellow(chalk.bold(isExperimental()))}`));
    console.info(chalk.cyan(`isEsLintOn: ${chalk.yellow(chalk.bold(isEsLintOn()))}`));
};

export default {
    isDebug,
    isStage,
    isVerbose,
    isAnalyze,
    isExperimental,
    isEsLintOn,
    getMode,
    getModeNaming,
    showState,
};
