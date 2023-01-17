const Videos= require('../models/videos.models');

class VideoServices{
    static async create(video) {
        try{
            const result = await Videos.create(video);
            return result;
        } catch (error){
             throw error;
        }
    }

    static async delete(id){
        try{
              const result = await Videos.destroy({ where: {id} });
              return result;
        } catch (error){
            throw error;
        }
    }
}

module.exports = VideoServices;