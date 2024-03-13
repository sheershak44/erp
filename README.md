# ERP - System

## Description : 

This ERP System is designed to manage basic business operations efficiently. It features a user-friendly interface for managing products and orders, along with a dashboard for an overview of key metrics. Built with React, this application demonstrates the use of modern web technologies to create a responsive and modular enterprise resource planning tool.


## Features : 

•	Dashboard: Displays a summary of key metrics, including the total number of products and orders.

•	Product Management: Allows for the management of product listings, including adding, editing, and deleting products.

•	Order Management: Facilitates the viewing and handling of orders, including deletion and status updates.

•	Responsive Design: Ensures the application is usable on both desktop and mobile devices.


## Technology Stack : 

•	Frontend: React.js

•	Routing: React Router

•	Styling: Tailwind CSS

•	State Management: React Hooks


## Installation : 

To set up the project locally, follow these steps:

1.	Clone the repository -	````git clone```` 

2.	Navigate to the project directory - 
	````cd erp-system````

3.	Create react app -
 	````npm create vite@latest````

4.	Install dependencies -

  	````npm install````

  	
	````npm install react-router````


	````npm install react-router-dom@6````


	````npm install -D tailwindcss postcss autoprefixer````


	````npx tailwindcss init -p````


	````npm install react-calendar````



6.	Start the development server - 
  	````npm run dev````

7. For using Tailwind -

    Replace `content: []` in tailwind.config.js file with this - ` content: [
                "./index.html",
                "./src/**/*.{js,ts,jsx,tsx}",
                ]`
    
    Also add the below to the index.css file -

        @tailwind base;
        @tailwind components;
        @tailwind utilities;


## Usage : 

Navigate through the application using the nav bar at the top to access different functionalities: 

• Dashboard: Get an overview of the current business status.

• Manage Products: View, add, edit, or delete products from your inventory.

• Manage Orders: View and delete orders. Update the status of each order as needed.


## Screenshots and How it Works :



#### Dashboard : 





+ Dashboard Overview : Upon launching the app, you'll land on the Dashboard. It displays the total number of products and orders .The total number of products (3) and orders (2) displayed here are without performing any operation . You can navigate to different pages through the Manage Products and Manage Orders button and also through the nav bar located at the top.






![Screenshot (64)](https://github.com/sheershak44/erp-system/assets/78754106/f6b2e4ba-d570-449e-98ac-38771f80eedb)







#### Managing Products : 

* Accessing Product Management: Click on the "Manage Products" button in dashboard page or the PRODUCTS link in the nav bar to access the Products Management page .






![Screenshot (65)](https://github.com/sheershak44/erp-system/assets/78754106/c79b0157-0d89-4724-8d4f-a3d6d7ad3ba3)





* Adding a Product : Click the "Add New Product" button, fill in the product details, and save changes.




  
![Screenshot (66)](https://github.com/sheershak44/erp-system/assets/78754106/6fe53ddc-d9d7-4938-a683-136b5f9ea88c)



* New product has been added as we can see below.




  
![Screenshot (67)](https://github.com/sheershak44/erp-system/assets/78754106/bc2f4e77-52e4-4d19-bed7-0a62b015f91b)





* As we can see below the total number of products increased from `5` to `6` in the dashboard page.





![Screenshot (68)](https://github.com/sheershak44/erp-system/assets/78754106/0be8aab7-5e8a-487b-b0fe-94e607e7478d)






* Editing a Product : Click the "Edit" button next to any product, modify the details in the form, and save changes.



  
![Screenshot (69)](https://github.com/sheershak44/erp-system/assets/78754106/dfae6d15-0bac-445e-b968-f38d2e2a9cd3)





* As we can see below the second product which was `chair` earlier has been changed to the `table` , etc .



  


![Screenshot (70)](https://github.com/sheershak44/erp-system/assets/78754106/85435cbf-641c-47d5-9b08-90fded8be535)






* Deleting a Product : Click the "Delete" button next to any product to remove it from the listing. We tried to delete the `Shirt` product from the product list and it was deleted as we can see below .



  

![Screenshot (71)](https://github.com/sheershak44/erp-system/assets/78754106/56b3e12b-461c-4179-b903-60e9f120e10b)





* As we can see below the total number of orders decreased from `6` to `5` in the dashboard page.



  
![Screenshot (72)](https://github.com/sheershak44/erp-system/assets/78754106/1eaac0a2-491b-4fe1-9b07-3efd6b3bfee3)






#### Managing Orders : 

* Accessing Order Management : Select "Manage Orders" from the dashboard page or the ORDERS link in the nav bar to access the Orders Management page . Here the 13th March date is getting highlighted in yellow as it shows the current date when the screenshot was captured. Here `4` orders are being displayed or listed with their details as they are mock data i.e. hardcoded.



  

![Screenshot (73)](https://github.com/sheershak44/erp-system/assets/78754106/bd005541-832c-47be-877c-89b3ae0785de)




![Screenshot (74)](https://github.com/sheershak44/erp-system/assets/78754106/ccd9795a-22b9-4f3a-956e-19c5258285a3)





* Viewing Orders: Orders are listed with details such as ID, customer name, order date, and status. There are four orders which we have hardcoded using mock data as it was mentioned in the assessment form. Four orders are of expected delivery date `2024-03-20` and `2024-03-22` and `2024-03-17` and `2024-03-18` . Format we have used is `YYYY-MM-DD`. Below 15th March date is selected in calender , as no orders are there on that date so it is showing `No orders for this date`




![Screenshot (75)](https://github.com/sheershak44/erp-system/assets/78754106/ea0c0962-abe5-4ab8-82e1-cce2fe49b483)




* Order of date 20th March - 





![Screenshot (76)](https://github.com/sheershak44/erp-system/assets/78754106/6e140a77-2b1f-4584-9534-43087c645ec2)




* Second order with `orderID - 2` has been removed as we clicked the delete button . Now only `3` orders are remaining , as we can see below :




  ![Screenshot (78)](https://github.com/sheershak44/erp-system/assets/78754106/38ea9b50-31c9-47e4-9b66-3ed8ba4ac1f7)




  * As we can see below the total number of orders decreased from `4` to `3` in the dashboard page. This happened because we deleted the one order from the order management page so it became from 4 orders to 3 order.




![Screenshot (79)](https://github.com/sheershak44/erp-system/assets/78754106/a5e77dcf-1e49-43ad-bb00-f7888da69f2e)
 




* Updating Order Status: Click one of the status update buttons ("Processing", "Shipped", "Delivered") to change an order's status. Here we have changed the order status of order from the `Shipped` to `Delivered` as we can see below



  

![Screenshot (80)](https://github.com/sheershak44/erp-system/assets/78754106/8d3422b2-50e2-4506-bc9d-4e75bf2801de)





* Deleting an Order: Click the "Delete" button to remove an order. The order dated 2024-03-20 has been deleted and now it started showing `No orders for this date.`



  

![Screenshot (83)](https://github.com/sheershak44/erp-system/assets/78754106/a59fa76e-7f28-4e04-978f-3d84990b788e)





* Here we can see that only `two` orders are being listed now , that is only orders with `orderID - 1 and orderID - 4` , because other orders have been deleted from the order list .





![Screenshot (81)](https://github.com/sheershak44/erp-system/assets/78754106/46793ace-7750-4646-935a-56c5a91c491f)





* Now lastly , as we can see below the total number of orders decreased from `3` to `2` in the dashboard page. This happened because we deleted the one order from the order management page so it became from 3 orders to 2 order.



  

![Screenshot (82)](https://github.com/sheershak44/erp-system/assets/78754106/99513d61-0a18-4ab2-a459-8dde688c77bc)






## Contact :
For any questions or suggestions, please reach out to us at sheershakpachori08@gmail.com.
