import http from "../http-common";

class FileUploadService{
    upload(file, onUploadProgress){
        let formData = new FormData();
        
        formData.append("file",file);

        return http.post("/upload",formData,{
            headers:{
                "Content-type": "multipart/form-data",
            },// headers
            onUploadProgress,
        });// return
    }

    getFiles(){
        return http.get("/files");
    }

}//class

export default new FileUploadService();
