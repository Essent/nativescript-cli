interface INodePackageManager {
	cache: string;
	load(config?: any): IFuture<void>;
	install(packageName: string, pathToSave?: string): IFuture<string>;
}

interface IStaticConfig extends Config.IStaticConfig { }