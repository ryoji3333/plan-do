class TasklistsController < ApplicationController
  def update
    Tasklist.update(tasklist_params)
    head :no_content
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
