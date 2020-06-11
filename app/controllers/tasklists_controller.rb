class TasklistsController < ApplicationController
  def sort
    tasklists = tasklists.find(params[:tasklist_id])
    tasklists.update(tasklist_params)
    render nothing: true
  end

  private
  def tasklist_params
    params.require(:tasklist).permit(:row_order_position)
  end
end
