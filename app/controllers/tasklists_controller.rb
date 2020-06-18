class TasklistsController < ApplicationController
  def update
    Tasklist.update(tasklist_params)
    head :no_content
  end

  def destroy
    tasklist = Tasklist.find(params[:id])
    tasklist.destroy
    redirect_to project_path(params[:project_id])
  end

  def sort
    tasklists = Tasklist.find(params[:tasklist_id])
    tasklists.update(tasklist_params)
    head :no_content
  end

  private
  def tasklist_params
    params.permit(:id ,:row_order_position)
  end
end
