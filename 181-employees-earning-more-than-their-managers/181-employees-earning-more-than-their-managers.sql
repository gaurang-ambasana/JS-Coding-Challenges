# Write your MySQL query statement below
select e.name as employee from employee e where e.salary > (select e2.salary from employee e2 where e2.id = e.managerid)