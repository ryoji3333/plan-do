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
    @tasklists = Tasklist.where(project_id: @project.id)
    @tasks = Task.where(project_id: @project.id)
  end

  private
  def project_params
    params.require(:project).permit(:name, :finish_date, :finish, :created_at, :updated_at).merge(user_id: current_user.id)
  end
end
