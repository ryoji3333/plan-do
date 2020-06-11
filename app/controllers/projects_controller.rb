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
  end

  def update
    Task.create(task_params)
    head :no_content
  end

  def sort
    tasks = Task.find(params[:task_id])
    tasks.update(task_params)
    head :no_content
  end

  private
  def project_params
    params.require(:project).permit(:name, :finish_date, :finish, :created_at, :updated_at).merge(user_id: current_user.id)
  end

  def task_params
    params.permit(:id,:text, :row_order_position)
  end
end
