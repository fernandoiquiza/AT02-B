package org.funjala.automation.web.common.api;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

/**
 * Created by RoyRodriguez on 12/23/2016.
 */
public class ApiProjects {

  public ArrayList<Project> getAllProjectsNames() throws IOException {
    ArrayList<Project> listOfProjects = new ArrayList<Project>();

    RestAssured restAssured = new RestAssured();

    List<String> listNames = restAssured.get("org.funjala.automation.web.pivotal.base").jsonPath().getList("name");
    List<Integer> listId = restAssured.get("org.funjala.automation.web.pivotal.base").jsonPath().getList("id");
    List<String> listKind = restAssured.get("org.funjala.automation.web.pivotal.base").jsonPath().getList("kind");

    for (int index = 0; index < listNames.size(); index++) {
      Project project = new Project();
      project.setName(listNames.get(index));
      project.setId(listId.get(index));
      project.setKind(listKind.get(index));
      listOfProjects.add(project);
    }
    return listOfProjects;
  }

  public Project getProjectByName(String nameOfProject) throws IOException {
    for (Project project : getAllProjectsNames()) {
      if (project.getName().equalsIgnoreCase(nameOfProject)) {
        return project;
      }
    }
    return null;
  }

  public boolean deleteProjectByName(String nameOfProject) throws IOException {
    RestAssured restAssured = new RestAssured();
    IllegalArgumentException exception= new IllegalArgumentException(nameOfProject + "doesn't exist.");

    Integer id = getProjectByName(nameOfProject).getId();
    String endPoint = "org.funjala.automation.web.pivotal.base" + "/" + id;

    if(restAssured.delete(endPoint).statusCode() == 204) {
      return true;
    }
    else {
      throw exception;
    }
  }

  public boolean deleteAllProjects() throws IOException {
    boolean res = false;
    for (Project project : getAllProjectsNames()) {
      res = deleteProjectByName(project.getName());
    }
    return res;
  }
}