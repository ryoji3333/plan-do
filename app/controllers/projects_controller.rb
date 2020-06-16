class ProjectsController < ApplicationController
  def index
    if user_signed_in?
      @projects = Project.where(user_id: current_user.id)
    end
  end

  def new
    @project = Project.new
  end

  def create
    Project.create(project_params)
    redirect_to root_path
  end

  def show
    @project = Project.find(params[:id])
    @tasklists = Tasklist.where(project_id: @project.id).rank(:row_order)
    @task = Task.new
  end

  def edit
    @project = Project.find(params[:id])
  end

  def update
    project = Project.find(params[:id])
    project.update(project_params)
    redirect_to project_path(params[:id])
  end

  def newtask
    Task.create(task_new_params)
    redirect_to project_path(params[:id])
  end


  def finish
    project = Project.find(params[:id])
    project.update(finish: true)
    redirect_to root_path
  end

  def return
    project = Project.find(params[:id])
    project.update(finish: false)
    redirect_to root_path
  end

  def destroy
    project = Project.find(params[:id])
    project.destroy
    redirect_to root_path
  end

  private
  def project_params
    params.require(:project).permit(:name, :finish_date, :finish, :created_at, :updated_at).merge(user_id: current_user.id)
  end
  
  def task_new_params
    params.require(:task).permit(:text,:project_id,:tasklist_id).merge(user_id: current_user.id)
  end
end
