const Courses= require('../models/courses.models');
const userCourses = require('../models/userCourses.model');

class CoursesServices {
    static async getAll(){
        try{
            const result= await Courses.findAll();
            return result;
        }catch (error) {
            throw error;
          }
    };

    static async getById(id) {
        try{
            const result= await Courses.findByPk(id);
            return result;
        }catch (error) {
            throw error;
          } 
    };

    static async create(course){
        try{
            const result= await Courses.create(course);
            return result;
        }catch (error) {
            throw error;
          } 
    };

    static async update(id, field) {
        try {
          const result = await Courses.update(field, { where: { id } });
          return result;
        } catch (error) {
          throw error;
        }
      }

      static async delete(id) {
        try {
          const result = await Courses.destroy({ where: { id } });
          return result;
        } catch (error) {
          throw error;
        }
      }
}

module.exports= CoursesServices;