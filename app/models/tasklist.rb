class Tasklist < ApplicationRecord
  include RankedModel
  ranks :row_order, :with_same => :project_id 

  has_many :tasks
  belongs_to :user
  belongs_to :project
end
