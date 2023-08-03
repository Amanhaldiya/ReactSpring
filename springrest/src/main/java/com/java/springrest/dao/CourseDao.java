package com.java.springrest.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.java.springrest.entities.Course;

public interface CourseDao extends JpaRepository<Course , Long>
{

}
