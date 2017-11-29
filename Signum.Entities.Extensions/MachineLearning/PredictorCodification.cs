﻿using System;

namespace Signum.Entities.MachineLearning
{
    [Serializable, EntityKind(EntityKind.System, EntityData.Transactional)]
    public class PredictorCodificationEntity : Entity
    {
        [NotNullable]
        public Lite<PredictorEntity> Predictor { get; set; }

        public PredictorColumnUsage Usage { get; set; }

        public int Index { get; set; }

        public int? SubQueryIndex{ get; set; }

        public int OriginalColumnIndex { get; set; }
        

        //For flatting collections
        [SqlDbType(Size = 100)]
        public string SplitKey0 { get; set; }

        [SqlDbType(Size = 100)]
        public string SplitKey1 { get; set; }

        [SqlDbType(Size = 100)]
        public string SplitKey2 { get; set; }


        //For 1-hot encoding
        [SqlDbType(Size = 100)]
        public string IsValue { get; set; }


        //For encoding values
        [NotNullable, PreserveOrder]
        [NotNullValidator, NoRepeatValidator, SqlDbType(Size = 100)]
        public MList<string> CodedValues { get; set; } = new MList<string>();

        public float? Mean { get; set; }
        public float? StdDev { get; set; }
    }
}