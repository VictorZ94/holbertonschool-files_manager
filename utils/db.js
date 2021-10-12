import { MongoClient } from 'mongodb';

class DBClient {
  constructor() {
    this.host = process.env.DB_HOST || 'localhost';
    this.port = process.env.DB_PORT || 27017;
    this.database = process.env.DB_DATABASE || 'files_manager';
    this.url = `mongodb://${this.host}:${this.port}`;
    MongoClient.connect(this.url, (err, client) => {
      if (!err) {
        this.DB = client.db(this.database);
      } else {
        this.DB = false;
      }
    });
  }

  isAlive() {
    if (this.DB) {
      return true;
    }
    return false;
  }

  async nbUsers() {
    const countUsers = await this.DB.collection('users').countDocuments();
    return countUsers;
  }

  async nbFiles() {
    const countFiles = await this.DB.collection('files').countDocuments();
    return countFiles;
  }
}

const dbClient = new DBClient();
export default dbClient;
