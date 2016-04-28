angular.module('uigrid')
    .service('DictionariesService', function DictionariesService() {
        var dataObj = {
            "totalRows": 4,
            "data": [
                {
                    "__metadata": {
                        "id": "1",
                        "fields": {
                            "id": {
                                "type": "int",
                                "unique": true
                            },
                            "name": {
                                "type": "string"
                            },
                            "type": {
                                "type": "string"
                            },
                            "description": {
                                "type": "string"
                            },
                            "price": {
                                "type": "float"
                            }
                        },
                        "descriptives": {},
                        "dates": {}
                    },
                    "id": 1,
                    "name": "Basketball",
                    "type": "Sport",
                    "description": "",
                    "price": 100000
                },
                {
                    "__metadata": {
                        "id": "2",
                        "fields": {
                            "id": {
                                "type": "int",
                                "unique": true
                            },
                            "name": {
                                "type": "string"
                            },
                            "type": {
                                "type": "string"
                            },
                            "description": {
                                "type": "string"
                            },
                            "price": {
                                "type": "float"
                            }
                        },
                        "descriptives": {},
                        "dates": {}
                    },
                    "id": 2,
                    "name": "Football",
                    "type": "Sport",
                    "description": "foo fightersiaaa",
                    "price": 10
                },
                {
                    "__metadata": {
                        "id": "3",
                        "fields": {
                            "id": {
                                "type": "int",
                                "unique": true
                            },
                            "name": {
                                "type": "string"
                            },
                            "type": {
                                "type": "string"
                            },
                            "description": {
                                "type": "string"
                            },
                            "price": {
                                "type": "float"
                            }
                        },
                        "descriptives": {},
                        "dates": {}
                    },
                    "id": 3,
                    "name": "Tent",
                    "type": "Camping",
                    "description": "122252",
                    "price": 30
                },
                {
                    "__metadata": {
                        "id": "8",
                        "fields": {
                            "id": {
                                "type": "int",
                                "unique": true
                            },
                            "name": {
                                "type": "string"
                            },
                            "type": {
                                "type": "string"
                            },
                            "description": {
                                "type": "string"
                            },
                            "price": {
                                "type": "float"
                            }
                        },
                        "descriptives": {},
                        "dates": {}
                    },
                    "id": 8,
                    "name": "bob",
                    "type": "",
                    "description": "44444aa",
                    "price": 20
                }
            ]
        }
        this.readAll = function () {
            return dataObj;
        };
    });