class TasksController < ApplicationController
  def index
    @tasks = Task.all
  end 

  def new
  end

  def create
  end

  def edit
  end

  def update
    Task.create(task_params)
  end

  private
  def task_params
    params.require(:task).permit(:text, :row_order_position)
  end
end
