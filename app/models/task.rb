class Task < ApplicationRecord
  include RankedModel
  ranks :row_order, :with_same => :tasklist_id 

  belongs_to :project
  belongs_to :user
  belongs_to :tasklist
  validates :text, presence: true
end
