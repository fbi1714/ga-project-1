class OrderController < ApplicationController

  before_action :authorise

  def index
    @orders = Order.all
  end

  def new
    @order = Order.new
  end

  def create
    @order = Order.new order_params
    if @order.save
      redirect_to new_order_path
    else
      render :new
    end
  end

  private
    def order_params
      params.require(:order).permit(:description, :order_number)
    end

    def authorise
      # Unless someone is logged in, take every request back to the login page
      flash[:error] = "You need to be logged in for that" unless @current_user.present?
      redirect_to login_path unless @current_user.present?
    end

end
