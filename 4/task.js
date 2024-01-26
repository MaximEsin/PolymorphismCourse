class DatabaseConfigLoader {
  constructor(configPath) {
    this.configPath = configPath;
  }

  load(env) {
    const filePath = path.join(this.configPath, `database.${env}.json`);
    const fileContent = fs.readFileSync(filePath, 'utf8');
    const config = JSON.parse(fileContent);

    if (config.extend) {
      const extendedConfig = this.load(config.extend);
      delete config.extend;
      return { ...extendedConfig, ...config };
    }

    return config;
  }
}
