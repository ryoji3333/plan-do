class Task < ApplicationRecord
  belongs_to :project
  belongs_to :user
  belongs_to :tasklist
end
