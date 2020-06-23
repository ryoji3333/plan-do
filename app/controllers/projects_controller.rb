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
    # Project.create(project_params)
    # redirect_to root_path
    @project = Project.new(project_params)
    if @project.save
      redirect_to root_path
    else
      render "new"
    end
  end

  def show
    @project = Project.find(params[:id])
    @tasklists = Tasklist.where(project_id: @project.id).rank(:row_order)
    @task = Task.new
    @tasklist = Tasklist.new
  end

  def edit
    @project = Project.find(params[:id])
  end

  def update
    project = Project.find(params[:id])
    project.update(project_params)
    redirect_to project_path(params[:id])
  end

  def newtasklist
    Tasklist.create(tasklist_new_params)
    redirect_to project_path(params[:id])
  end

  def newtask
    Task.create(task_new_params)
    redirect_to project_path(params[:id])
  end

  def updatetask
    task = Task.find(params[:task_id])
    task.update(task_edit_params)
    redirect_to project_path(params[:id])
  end

  def updatetasklist
    tasklist = Tasklist.find(params[:tasklist_id])
    tasklist.update(tasklist_edit_params)
    redirect_to project_path(params[:id])
  end

  def finish
    project = Project.find(params[:id])
    project.update(finish: true)
    redirect_to root_path
  end

  def finishtask
    task = Task.find(params[:task_id])
    task.update(finish: true)
    redirect_to project_path(params[:id])
  end

  def reversetask
    task = Task.find(params[:task_id])
    task.update(finish: false)
    redirect_to project_path(params[:id])
  end

  def finishtasks
    tasks = Task.where(tasklist_id: params[:tasklist_id])
    tasks.each do |t|
      t.update(finish: true)
    end
    redirect_to project_path(params[:id])
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

  def tasklist_new_params
    params.require(:tasklist).permit(:name,:project_id).merge(user_id: current_user.id)
  end

  def task_edit_params
    params.require(:task).permit(:text,:project_id,:tasklist_id,:id,:detail,:finish_date,:color).merge(user_id: current_user.id)
  end

  def tasklist_edit_params
    params.require(:tasklist).permit(:name,:project_id,:id).merge(user_id: current_user.id)
  end
end
