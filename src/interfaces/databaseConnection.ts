interface mongoConfigObj {
  URI: string;
  OPTIONS: {
    useUnifiedTopology: boolean;
    useNewUrlParser: boolean;
    socketTimeoutMS: number;
    keepAlive: boolean;
    maxPoolSize: number;
  };
}
export default mongoConfigObj;
