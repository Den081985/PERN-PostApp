const uuid = require("uuid");
const path = require("path");
//Объект для работы с файлами
class FileService {
  //метод сохранения файлов
   saveFile(file) {
    try {
      //генерация id файла
      const fileName = uuid.v4() + ".jpg";
      //генерация пути к файлу
      const filePath = path.resolve("static", fileName);
      //перемещение файла по указанному адресу
      file.mv(filePath);
      return fileName;
    } catch (error) {
      console.log(error);
    }
  }
}

module.exports = new FileService();
