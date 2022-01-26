const bcrypt = require('bcrypt');
const fs = require('fs');
const dotenv = require('dotenv');
const path = require('path');

async function main() {
  const chalk = (await import('chalk')).default;
  const fileName = '.env.local';
  const envVarName = 'APP_KEY';

  const filePath = path.join(process.cwd(), fileName);
  const key = bcrypt.hashSync(Date.now().toString(), 10);
  if (fs.existsSync(filePath)) {
    const env = dotenv.config({ path: filePath });
    if (env.error) {
      console.error(env.error.message);
      return 1;
    }
    if (env.parsed[envVarName]) {
      console.log(chalk.bold('Key already exists!'));
      return 0;
    }
    const envContent = fs
      .readFileSync(filePath)
      .toString()
      .split('\n')
      .filter((line) => !line.trim().startsWith(envVarName));
    fs.writeFileSync(
      filePath,
      `${envContent.join('\n')}\n${envVarName}="${key}"`,
    );
  } else {
    fs.writeFileSync(filePath, `${envVarName}="${key}"`);
  }
  console.log(chalk.green(`${chalk.bold('Generated key:')} ${key}`));
  return 0;
}

main().then(process.exit).catch(console.error);
