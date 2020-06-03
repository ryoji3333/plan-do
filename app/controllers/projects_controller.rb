class ProjectsController < ApplicationController
  def index
    @projects = Project.where(params[current_user.id])
  end

  def new
    @project = Project.new
  end

  def create
    Project.create(project_params)
    redirect_to root_path
  end

  def show

  end

  private
  def project_params
    params.require(:project).permit(:name, :finish_date, :finish, :created_at, :updated_at).merge(user_id: current_user.id)
  end
end
