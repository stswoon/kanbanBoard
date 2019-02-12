export const strings = {
    systemErrorContactAdmin: "Системная ошибка, пожалуйста обратитесь к администратору",
    ok: "ОК",
    cancel: "Отмена",

    table: {
        calculate: "Расчитать",
        add: "Добавить",
        remove: "",
        insert: "",
        verticalTitle: "",
        fillRequiredValidData: "Заполните обязательные поля и\\или исправьте невалидные"
    },
    header: {
        modules: {
            general: "Общие сведения",
            trajectory: "Траектория",
            geology: "ГСД",
            breakage: "Нагрузка в колоннах",
            solute: "Растворы"
        },
        saveProject: "Сохранить",
        openProject: "Открыть",
        newProject: "Новый",
        areYouSureNewProject: "Вы уверены что хотите создать новый проект и стереть текущие данные?",
        newTestProject: "Тестовый проект",
        calcProject: "Рассчитать проект",
        noNameProject: "UnnamedProject",
        autoCalculate: "Авто расчет модуля",
        autoCalculateDescription: "Если включено то при уходе из ячейки или при нажатии enter происходит рассчет модуля, если выключено, то только при нажатии кнопки 'Рассчет'"
    },

    general: {
        projectName: "Имя проекта",
        clientName: "Имя клиента",
        comments: "Комментарии",
        targets: "Цели",
        azimuth: "Азимут",
        waste: "Отход",
        depth: "Глубина (TVD)",
        tolerance: "Допуск"
    },
    trajectory: {
        table: {
            "md": "md",
            "inc": "inc",
            "az": "az",
            "TVD": "TVD",
            "CL": "CL",
            "dN": "dN",
            "dE": "dE",
            "Vsec": "sec",
            "DLS": "DLS",
            "Build": "Build",
            "Turn": "Turn",
            "TFO": "TFO",
            "tau": "tau",
            "RF": "RF",
            "incR": "incR",
            "azR": "azR",

            "interpolationStep": "Шаг интерполяции:",
            showInterpolation: "Показать интерполяцию",

            warnings: {
                "fillTrajectoryData": "Заполните опорные точки для рассчета траектории",
                "valueShouldBePositive": "Значение интерполяции и\\или 'md' должно быть положительным",
                "valueMdShouldBeAscendant": "Параметр 'md' должен быть восходяшим"
            }
        },
        charts: {
            "verticalChartName": "Вертикаль",
            "verticalAxis": "Вертикаль (TVD)",
            "retreatAxis": "Отход (V.sec)",
            "eastwardChartName": "На восток",
            "eastwardAxis": "На север (dN)",
            "northwardAxis": "На восток (dE)"
        }
    },
    geology: {
        column: {
            type: "Название", //see AV in keys of geology.columns
            suspensionInVertical: "Подвеска по вертикали",
            shoeVertically: " Башмак по вертикали",
            suspnsionOnTrunk: " Подвеска по стволу",
            bootShoe: "Башмак по стволу",
            columndDiameter: " Диаметр колонны",
            densityOfSolution: "Плотность раствора, г/см3",

            warnings: {
                calculateTrajectoryFirst: "Пожалуйста, сначала выполните расчет траектории с шагом 1 метр или меньше"
            }
        },
        columns: {
            direction: "Направление",
            conductor: "Кондуктор",
            shankBetween: "Хвостовик промежуточный",
            thechnicalColumn: "Тех. колонна",
            pilot: "Пилотный ствол",
            operational: "Эксплуатационная",
            operationalShank: "Хвостовик эксплуатационный"
        },
        oilGas: {
            name: "Название пласта",

            sourceDataSection: "Исходные данные:",
            density: "Плотность, кг/м3",
            densityGas: "Относительная плотность газа",
            densityOil: "Плотность нефти, г/см3",
            roof: "Кровля, м",
            saturationPressure: "Давление насыщения (Рнас), [МПа]",
            layerPressure: "Пластовое давление (Рпл), МПа",
            gasColumnHeight: "Высота столба газа, м",
            smSL: "Sm/Sl",
            orificeTemperature: "Температура на устье при эксплуатации (Туст), °C",
            layerTemperature: "Температура пласта (Тпл), °C",
            gasCompressibility: "Коэффициент сжимаемости газа m",

            resultSection: "Результат расчета:",
            shoeDepth: "Глубина башмака, м",
            shoePressure: "Давление ГРП на башмаке (Ргрпб), МПа",
            orificePressure: "Давление на устье (Pуст), МПa",
            wellPressure: "Давление в скважине на глубине башмака (Рвб), МПа",
            shoeReserve: "Запас на ГРП при определении глубины башмака",
            pressureReserve: "Давление ГРП с запасом",

            resultFluidSection: "Расчёт давления задавки при ГНВП:",
            fluidReserve: "К запаса на ГРП при задавке флюида",
            shoePressureFluid: "Давление ГРП на башмаке при задваке (Рзд), МПа",
            orificePressureFluid: "Давление на устье при задавке, МПа",

            resultCrimpingSection: "Расчёт давления опрессовки:",
            orificePressureCrimping: "Давление на устье при опрессовке, МПа",
            workingPressureSeaDrilling: "Рабочее давление ПВО",

            otherSection: "Другое:",
            sole: "Подошва, м",
            h2s: "H2S, %",
            hco2: "CO2, %",

            warnFillTable: "Заполните таблицу '{table}'",
            warnFillFGPercentage: "Заполните параметр 'отклонение' в таблице FG",
            warnMinAvailableDepth: "Таблица '{table}' должна содержать точку с глубиной больше {minAvailableDepth}"
        },
        tabs: {
            PP: "PG",
            FG: "FG",
            DBG: "DBG",
            T: "Температура",
            column: "Колонны",
            oil: "Нефтеностность",
            gas: "Газоностность",
            water: "Водоностность"
        }
    },
    breakage: {
        columnId: "Колонна",
        suspension: "Подвеска",
        roof: "Башмак",
        roofNext: "Башмак следующей колонны",
        densityOfSolution: "Плотность раствора, г/см3",
        nextSoluteDensity: "Плотность раствора следующей колонны, г/см3",
        levelDecrease: "Снижение уровня, м",
        vpc: "ВПЦ",
        topNormalCement: "Верх цемента нормальной плотности, м",
        densityLightCement: "Цемент облегченный, г/см3",
        densityNormalCement: "Цемент нормальной плотности, г/см3",
        layerCalculationEnable: "Рассчет по пласту",
        layerWithName: "Пласт '{name}'",
        maxOrificePressureCrimping: "Давление опрессовки, МПа",
        fluidDensityCrimping: "Плотность жидкости опрессовки, г/см3",
        criticalOilLayerId: "Критический пласт",
        crimpingOnSuspension: "Давление при опресовке в подвеске, МПа",

        safetyKoefs: "Коэффициенты запаса:",
        collapse: "на смятие",
        burst : "на разрыв",
        moving: "на страгивание",
        selectedColumn: "Выбранная клонна",
        outerDiameter: "Наружный диаметр, мм",
        wallThickness: "Толщина стенки, мм",
        weightPerMeter: "Вес погонного метра, кг/м",
        groupStrength: "Группа прочности",
        pressureCollapse: "Давление смятия, МПа",
        pressureBurst: "Давление разрыва, МПа",
        stretchingToYieldStrength: "Растяжение до предела текучести, т",
        calculationResults: "Результаты расчёта",
        columnWeight: "Вес колонны, т",
        allowableTensileWithKoef: "Допустимое растяжение с учётом К запаса, т",
        estimatedCollapseKoef: "Расчётный коэффициент запаса на смятие",
        estimatedBurstKoef: "Расчётный коэффициент запаса на разрыв",
        estimatedMovingKoef: "Расчётный коэффициент на страгивание",

        warnings: {
            fillOilPoints: "Сначала создайте слой в модуле ГСД - Нефтеностность",
            fillColumnPoints: "Сначала создайте колонны в модуле ГСД - Колонны",
            fillColumn: "В колонне {name} заполните 'Башмак по вертикали' и 'Плотность раствора'",
            fillOils: "В ГСД, в таблице Нефтенестность заполните параметры для всех слоев: Кровля, Давление пласта, Даленние на устье при опресовке"
        },
        charts: {
            nodata: "Рассчитайте данные для построения графиков",
            pp: "PP",
            innerPressure: "Внутреннее давление",
            loss: "Поглощение",
            blowout: "Замещение на флюид",
            test: "Опрессовка",
            drillout: "Бурение следующего интервала",
            cement: "Внешнее давление (цементирование)",
            pressureCollapse: "Давление смятия",
            pressureBurst: "Давление разрыва",
            pressureCollapseEstimated: "Давление смятия",
            pressureBurstEstimated: "Давление разрыва"
        },
        innerPressure: "Внутренние давления",
        overPressure: "Избыточные давления",
        layerType: {
            oil: "Нефть",
            gas: "Газ"
        }
    },


    "yes": "Да",
    "no": "Нет",
    "from": "От",
    "to": "До",

    "error": "Ошибка",
    "failToCalculate": "Ошибка при расчете: ",
    "failDisplayCalculations": "Ошибка при отображении результатов расчета: ",


    "depth": "Глубина",
    "ppg": "PPG, г/см3",
    "fg": "FG, г/см3",
    "obg": "OBG, г/см3",
    "reservePP": "Запас PP",
    "reserveFG": "Запас FG",
    "pressure": "Давление",
    "FGpercentage": "Отклонение в %",
    "temperature": "Температура, С",
    "reserve": "Запас",



        "geology_showGradientChart": "Градиент",
    "geology_showPressureChart": "Давление",


    solute: {
        tabs: {
            common: "Общие данные",
            solutes: "Растворы",
            recipe: "Рецептура"
        },
        input: {
            pleaseCheckGeologyData: "Пожалуйста, сначала выполните расчет колонн в модуле ГСД",
            name: "Название секции",
            borderWidth: "Толщина стенки",
            barrelDiameter: "Номинальный диаметр ствола, мм",
            wellboreInterval: "Интервал бурения, м",
            cavernousness: "Кавернозность",
            sludgeMoisture: "Коэффициент влажности шлама",
            soluteType: "Название (тип) бурового раствора",
            cleaningSystemEfficiency: "Эффективность системы очистки, %",
            permittingCuttingLevel: "Допустимое содержание выбуренной породы, %",
            depth: "Глубина спуска ОК,",

            minVolumeCircularSystem: "Минимальный объём ЦС",
            volumeCircularSystem: "Объем ЦС"
        },
        result: {
            intervals: "Интервалы",
            soluteItem: "Название колонны: {column} и интервал от {from} м до {to} м",
            cleaningSystemEfficiency: "Эффективность системы очистки, %",
            permittingCuttingLevel: "Допустимое содержание выбуренной породы, %",

            direction: "Направление", //todo geologyColumn_direction
            openTrunk: "Открытый ствол",
            transferFromPrev: "Переведено с предыдущего интервала",
            soluteColumnVolume: "Объем раствора в колонне, м3",
            openTrunkVolume: "Объем раствора в открытом стволе (объём выбуренной породы), м3",
            surfaceVolume: "Объем раствора на поверхности по окончанию бурения, м3",
            probableLosses: "Вероятные потери раствора в скважине (фильтрация) и на поверхности при СПО, м3",
            lossesWithSludge: "Потери со шламом, м3",
            dilutionVolume: "Объём разбавления, м3",
            returnToRevision: "Возврат в систему на дообработку",
            drying: "Осушка",
            efficiency: "Эффективность системы осушки",
            estimatedFreshVolume: "Расчетный объем свежего раствора на бурение интервала, м3",
            dilutionFactor: "Коэффициент разбавления",
            overallVolume: "Общий объём раствора",
            overallLosses: "Общие потери раствора",
            resultVolume: "Объём раствора по окончании бурения",
            sludgeAmountFromPrev: "Количество шлама в растворе, переведённого с предыдущего интервала, м3",
            resultSludgeAmountGotIntoSolute: "Количество шлама, попавшего в раствор по окончании бурения интервала, м3",
            resultSludgeAmountInSolute: "Количество шлама в растворе по окончании бурения интервала, м3",
            resultSludgeAmountInSoluteWithLosses: "Шлам, оставшийся в растворе по окончании бурения интервала с учётом потерь раствора, м3",
            resultSludgePercentageInSolute: "Количество шлама в растворе по окончании бурения интервала, %",

        },
        weights: {
            calculate: "Рассчитать",
            soluteType: "Тип раствора",
            transferFromPrev: "На обработку с предыдущего интервала",
            surfaceVolume: "Запас на поверхности в сухом виде",
            estimatedFreshVolume: "На приготовление",
            soluteName: "Компонент",
            forProcessing: "На обработку",
            forPreparation: "На приготовление",
            sumOfIntervalWithoutReserve: "Cуммарное",
            noPrevData: "Пожалуйста, проведите расчет на вкладке 'Растворы' для расчета весов растворов.",
            concentration: "Концентрация",
            soluteComponentsCount: "Количество компонентов бурового раствора"

        }
    }
};
