package com.java.springrest.services;
//import java.util.ArrayList;
import java.util.List;
//import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.java.springrest.dao.CourseDao;
import com.java.springrest.entities.Course;




@Service
public class CourseServiceMethod implements CourseService {

	@Autowired
	private CourseDao courseDao;
	
	// List<Course>list;
	public CourseServiceMethod() {
//		list=new ArrayList<>();
	//	list.add(new Course(145,"Java Core Course","Java Yeah" ));
	//	list.add(new Course(1458,"Java Core Course","Java Yeah" ));
	}
	@Override
	public List<Course> getCourses() {
		// TODO Auto-generated method stub
	//	return list;
	return courseDao.findAll();
	}
 @Override
	public Course getCourse(long courseId) {
	// Course c= null;
	// for(Course course: list) {
	//	 if(course.getId() ==courseId)
//{
	//c=course;
	//break;
//}
	 return courseDao.getReferenceById(courseId);
	 }
// return c;
// }
 public Course updateCourse(Course course) {
//	 list.forEach(e->{
	//	 if(e.getId()==course.getId()) {
		//	 e.setTitle(course.getTitle());
		//	 e.setDescription(course.getDescription());
		// }
	// });
 courseDao.save(course);
 return course;
 }
 //@Override
public void deleteCourse(long parseLong) {
	// list=this.list.stream().filter(e->e.getId()!=parseLong).collect(Collectors.toList());
   
     Course entity=courseDao.getReferenceById(parseLong);      
	 courseDao.delete(entity);
 
 }
 
 
 
 
	@Override
	public Course addCourse(Course course) {
	//list.add(course);
		courseDao.save(course);
	return course;
	}


}
