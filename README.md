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






![Screenshot (64)](https://github.com/sheershak44/erp-system/assets/78754106/9c232b4b-6581-4ffc-b5e5-85a539812792)






#### Managing Products : 

* Accessing Product Management: Click on the "Manage Products" button in dashboard page or the PRODUCTS link in the nav bar to access the Products Management page .






![Screenshot (65)](https://github.com/sheershak44/erp-system/assets/78754106/69c0683d-755a-41af-b8ce-c816d3584578)





* Adding a Product : Click the "Add New Product" button, fill in the product details, and save changes.




  

![Screenshot (66)](https://github.com/sheershak44/erp-system/assets/78754106/4776014e-f0ea-4bbe-b28a-3d9f804c570d)



* New product has been added as we can see below.




  

![Screenshot (67)](https://github.com/sheershak44/erp-system/assets/78754106/f19bfac1-cb07-4e7e-a0e3-546e8bca80fa)





* As we can see below the total number of products increased from `5` to `6` in the dashboard page.





![Screenshot (68)](https://github.com/sheershak44/erp-system/assets/78754106/5e19619f-1ff2-41b8-a1c7-d3e9dc0fa5a4)






* Editing a Product : Click the "Edit" button next to any product, modify the details in the form, and save changes.



  

![Screenshot (69)](https://github.com/sheershak44/erp-system/assets/78754106/e594ca1d-07bd-480c-b934-3c86b5e8305b)





* As we can see below the second product which was `chair` earlier has been changed to the `table` , etc .



  

![Screenshot (70)](https://github.com/sheershak44/erp-system/assets/78754106/1008963e-27d5-4e8a-81e4-d94dbd622caa)





* Deleting a Product : Click the "Delete" button next to any product to remove it from the listing. We tried to delete the `Shirt` product from the product list and it was deleted as we can see below .



  

![Screenshot (71)](https://github.com/sheershak44/erp-system/assets/78754106/b9edab01-e482-4b71-852c-a2ad64beb51b)





* As we can see below the total number of orders decreased from `6` to `5` in the dashboard page.



  

![Screenshot (72)](https://github.com/sheershak44/erp-system/assets/78754106/2c4ca100-f9c5-4b93-a057-513c32abdffb)






#### Managing Orders : 

* Accessing Order Management : Select "Manage Orders" from the dashboard page or the ORDERS link in the nav bar to access the Orders Management page . Here the 13th March date is getting highlighted in yellow as it shows the current date when the screenshot was captured. Here `4` orders are being displayed or listed with their details as they are mock data i.e. hardcoded.



  

![Screenshot (73)](https://github.com/sheershak44/erp-system/assets/78754106/2a6ee12a-a6a1-4de5-996d-dd4e2c8c6c63)


![Screenshot (74)](https://github.com/sheershak44/erp-system/assets/78754106/63711005-8d7c-4289-b800-95ff580e0f99)





* Viewing Orders: Orders are listed with details such as ID, customer name, order date, and status. There are four orders which we have hardcoded using mock data as it was mentioned in the assessment form. Four orders are of expected delivery date `2024-03-20` and `2024-03-22` and `2024-03-17` and `2024-03-18` . Format we have used is `YYYY-MM-DD`. Below 15th March date is selected in calender , as no orders are there on that date so it is showing `No orders for this date`




![Screenshot (75)](https://github.com/sheershak44/erp-system/assets/78754106/d87cdf3b-77d4-4f4f-af58-1f42814915eb)  




* Order of date 20th March - 




![Screenshot (76)](https://github.com/sheershak44/erp-system/assets/78754106/a612cf9c-44ce-4f91-b281-53eeb6452396)




* Second order with `orderID - 2` has been removed as we clicked the delete button . Now only `3` orders are remaining , as we can see below :




  ![Screenshot (78)](https://github.com/sheershak44/erp-system/assets/78754106/7c5f106a-1877-4cbf-a32d-e1675abd90ec)




  * As we can see below the total number of orders decreased from `4` to `3` in the dashboard page. This happened because we deleted the one order from the order management page so it became from 4 orders to 3 order.





![Screenshot (79)](https://github.com/sheershak44/erp-system/assets/78754106/7138cd90-991c-4311-a82f-b07ed4d54f16)
 




* Updating Order Status: Click one of the status update buttons ("Processing", "Shipped", "Delivered") to change an order's status. Here we have changed the order status of order from the `Shipped` to `Delivered` as we can see below



  

![Screenshot (80)](https://github.com/sheershak44/erp-system/assets/78754106/f55981c3-b16d-4d75-9063-3dd15981fdcc)





* Deleting an Order: Click the "Delete" button to remove an order. The order dated 2024-03-20 has been deleted and now it started showing `No orders for this date.`



  

![Screenshot (83)](https://github.com/sheershak44/erp-system/assets/78754106/05f6a473-c3d2-4613-858e-a5224dc74e4d)





* Here we can see that only `two` orders are being listed now , that is only orders with `orderID - 1 and orderID - 4` , because other orders have been deleted from the order list .




![Screenshot (81)](https://github.com/sheershak44/erp-system/assets/78754106/622b4f75-77a6-4640-b387-69998046fba5)





* Now lastly , as we can see below the total number of orders decreased from `3` to `2` in the dashboard page. This happened because we deleted the one order from the order management page so it became from 3 orders to 2 order.



  

![Screenshot (82)](https://github.com/sheershak44/erp-system/assets/78754106/b3bf9f1f-a3fb-4560-801e-9d65a2c6e49d)






## Contact :
For any questions or suggestions, please reach out to us at sheershakpachori08@gmail.com.
