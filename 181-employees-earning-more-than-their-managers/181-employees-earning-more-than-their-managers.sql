# Write your MySQL query statement below
select e.name as Employee from employee e where e.Salary > (select e2.Salary from Employee e2 where e2.id = e.ManagerId)