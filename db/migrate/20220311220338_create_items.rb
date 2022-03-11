class CreateItems < ActiveRecord::Migration[7.0]
  def change
    create_table :items do |t|
      t.string :name
      t.string :description
      t.float :price
      t.belongs_to :monster, null: false, foreign_key: true

      t.timestamps
    end
  end
end
