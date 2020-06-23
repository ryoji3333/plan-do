class Project < ApplicationRecord
  has_many :tasks
  has_many :tasklists
  belongs_to :user
  validates :name, presence: true
end
