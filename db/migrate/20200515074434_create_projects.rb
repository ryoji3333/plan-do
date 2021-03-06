class CreateProjects < ActiveRecord::Migration[5.0]
  def change
    create_table :projects do |t|
      t.string :name, null: false, default:""
      t.date :finish_date
      t.boolean :finish, null: false, default: false
      t.integer :user_id, null: false, foreign_key: true
      t.timestamps
    end
  end
end
