class AddColumnCtrToBlogs < ActiveRecord::Migration[7.1]
  def change
    add_column :blogs, :ctr, :float
  end
end
