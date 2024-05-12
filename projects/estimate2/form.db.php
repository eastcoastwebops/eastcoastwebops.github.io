<?php namespace JF;

/**

Copyright 2017 JQueryForm.com
License: http://www.jqueryform.com/license.php

*/

class Form2DB {
    
    // mysql
    private $db = array(
        'host'    => '127.0.0.1',
        'db'      => 'form2db',
        'user'    => 'form2db_user',
        'pass'    => 'form2db_pass',
        'charset' => 'utf8',    
    );

    private $table = 'demo';

    /*
    define the mapping between form field IDs and table columns
    */
    private $fieldMap = array(
        // formFieldID => columnName
        'f1'           => 'name',
        'f2'           => 'email',
        'f3'           => 'comments',

        'AutoID'       => 'AutoID',
        'HTTP_HOST'    => 'HTTP_HOST',
        'IP'           => 'IP',
        'Date'         => 'Date',
        'Time'         => 'Time',
        'HTTP_REFERER' => 'HTTP_REFERER',
    );

    private $pdo;

    private function connectDB(){
        $dsn = "mysql:host=" . $this->db['host'] . ";dbname=" . $this->db['db'] . ";charset=" . $this->db['charset'];
        $this->pdo = new \PDO( $dsn, $this->db['user'], $this->db['pass'] );
    }

    // $form is a array of form data after form validation
    public function saveFormData( $form ){
        $rowCount = 0;
        $values   = $this->getValues( $form );
        $columns  = array_keys( $values );
        $marks    = array_fill( 0, sizeof($columns), '?' );
        $sql      = "INSERT INTO " . $this->table . " (" . join( ",", $columns ) . ") VALUES ( " . join( ',', $marks ) . ")";        
        
        try{
            $this->connectDB();
            $stmt = $this->pdo->prepare( $sql );
            $stmt->execute( array_values($values) );
            $rowCount = $stmt->rowCount();
        } catch ( \PDOException $e ){
            // do nothing
            //die( $e->getMessage() );
        };
        
        return $rowCount;
    }

    private function getValues( $form ){
        $values = array();
        foreach( $this->fieldMap as $id => $column ){
            $values[ $column ] = isset($form[ $id ]) ? $form[ $id ] : '';
        }
        return $values;
    }
    
} // class


/*
example:

CREATE DATABASE form2db;

CREATE TABLE `demo` (
	`id` INT(10) UNSIGNED NOT NULL auto_increment,
	`name` TINYTEXT NULL,
	`comments` TEXT NULL,
	`email` VARCHAR(100) NULL DEFAULT NULL,

    `AutoID` varchar(64) NULL DEFAULT NULL,
    `HTTP_HOST` varchar(255) NULL DEFAULT NULL,
    `IP` varchar(15) NULL DEFAULT NULL,
    `Date` varchar(16) NULL DEFAULT NULL,
    `Time` varchar(16) NULL DEFAULT NULL,
    `HTTP_REFERER` text,

	PRIMARY KEY (`id`)
)
COLLATE='utf8_general_ci'
ENGINE=InnoDB;

GRANT ALL ON form2db.* TO 'form2db_user'@'localhost' IDENTIFIED BY 'form2db_pass';
flush privileges;
*/
