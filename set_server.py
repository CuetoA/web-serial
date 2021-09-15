# -*- coding: utf-8 -*-
"""
Created on Wed Sep  1 21:46:27 2021

@author: Cuetorra
Server
"""
import os
import subprocess

cur_folder = os.path.dirname(os.path.abspath(__file__))


p_file = 'C:\Windows\System32\powershell.exe '
cmd1 = 'cd '
cmd2 = 'nodemon servidor.js'
cmd3 = 'npm init --yes'
cmd4 = 'npm install serialport --yes'
cmd5 = 'npm install express'


command_1 = p_file + cmd1 + cur_folder
command_2 = p_file + cmd2 
command_3 = p_file + r'C:\Users\ADMIN\Desktop\start.JPG'

print(command_1)
print(command_2)

#subprocess.call(command_1, shell=True)
#subprocess.call(command_2, shell=True)
subprocess.call(command_3, shell=True)