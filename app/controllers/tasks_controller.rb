class TasksController < ApplicationController
  def index
    @tasks = Task.all
  end 

  def new
  end

  def create
    Task.create(task_new_params)
    redirect_to project_path(params[:id])
  end

  def edit
  end

  def update
    Task.update(task_params)
    head :no_content
  end

  def destroy
    task = Task.find(params[:id])
    task.destroy
    redirect_to project_path(params[:project_id])
  end

  def sort
    tasks = Task.find(params[:task_id])
    tasks.update(task_params)
    head :no_content
  end

  private
  def task_params
    params.permit(:id, :row_order_position, :tasklist_id, :finish)
  end

end
