class CreateTasks < ActiveRecord::Migration[5.0]
  def change
    create_table :tasks do |t|
      t.string :text, null: false
      t.date :finish_date
      t.boolean :finish, null: false, default: false
      t.integer :user_id, null: false, foreign_key: true
      t.integer :project_id, null: false, foreign_key: true
      t.timestamps
    end
  end
end
