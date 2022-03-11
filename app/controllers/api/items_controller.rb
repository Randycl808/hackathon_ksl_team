class Api::ItemsController < ApplicationController
  before_action :set_monster, except: [:items_all]
  before_action :set_item, only:[:show, :update, :destroy]
 
  def index
    render json:  @monster.items
  end

  def items_all
    render json: Item.all
  end

  
  def show
    render json: @items
  end

  def create
    item = @monster.items.new(items_params)
    if(item.save)
      render json: item
    else
      render json: {errors: item.errors.full_messages}, status: 422
    end
  end

 
  def update
    if(@item.update(item_params))
      render json: @item
    else
      render json: {errors: @item.errors.full_messages}, status: 422
    end
  end

  def destroy
    render json: @item.destroy
  end

  private 
  def set_monster
    @monster = Monster.find(params[:monster_id])
  end

  def set_item
    @item = @monster.items.find(params[:id])
  end

  def item_params
    params.require(:item).permit(:name, :description, :price, :monster)
  end
end
end
